import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

type BlogPostMetadata = {
  slug: string;
  title?: string;
  publishedOn?: string;
  [key: string]: any;
};

/**
 * Reads the '/content' directory, parses the blog posts, and returns a list of blog post metadata.
 * The list is sorted by the 'publishedOn' date in descending order.
 * @returns A Promise that resolves to an array of blog post metadata.
 */
export async function getBlogPostList(): Promise<BlogPostMetadata[]> {
  const fileNames = await readDirectory('/content');
  const blogPosts: BlogPostMetadata[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);
    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  // Filter out posts without a 'publishedOn' date, then sort the remaining by 'publishedOn'
  return blogPosts
    .filter((post) => post.publishedOn)
    .sort((p1, p2) => {
      // Since we've filtered out undefined 'publishedOn', assert non-nullability with '!'
      return p1.publishedOn! < p2.publishedOn! ? 1 : -1;
    });
}

/**
 * Given a slug, loads the blog post content and metadata.
 * Utilizes React's cache mechanism to memoize the blog post loading process.
 * @param slug - The slug of the blog post to load.
 * @returns A Promise that resolves to an object containing the blog post's frontmatter and content.
 */
export const loadBlogPost = React.cache(async function loadBlogPost(
  slug: string
): Promise<{ frontmatter: BlogPostMetadata; content: string }> {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  // Assert the type of frontmatter to satisfy TypeScript's type checking
  return { frontmatter: frontmatter as BlogPostMetadata, content };
});

/**
 * Reads a file and returns its content as a string.
 * @param localPath - The local path to the file relative to the project root.
 * @returns A Promise that resolves to the content of the file as a string.
 */
function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

/**
 * Reads the contents of a directory and returns the names of all files in it.
 * @param localPath - The local path to the directory relative to the project root.
 * @returns A Promise that resolves to an array of file names in the directory.
 */
function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}
