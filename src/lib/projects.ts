import { useSanityClient } from "@sanity/astro";

export async function fetchAllProjects() {
  const query = /* groq */ `*[_type == "project"]{
    name,
    title,
    slug,
    description,
    createdDate,
    category,
    tags,
    'imageUrl': image.asset->url
  }`

  return await useSanityClient().fetch(query);
}