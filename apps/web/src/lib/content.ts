type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tag?: string;
};

type Thought = {
  id: string;
  title: string;
  slug: string;
};

type ContentResult<T> =
  | { available: true; items: T[] }
  | { available: false; items: [] };

const unavailable = <T>(): ContentResult<T> => ({
  available: false,
  items: [],
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isProject(value: unknown): value is Project {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.slug === "string" &&
    typeof value.summary === "string" &&
    (value.tag === undefined || typeof value.tag === "string")
  );
}

function isThought(value: unknown): value is Thought {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.slug === "string"
  );
}

async function getItems<T>(
  endpoint: "projects" | "thoughts",
  validate: (item: unknown) => item is T,
): Promise<ContentResult<T>> {
  const baseUrl = process.env.CONTENT_API_URL;

  if (!baseUrl) {
    return unavailable<T>();
  }

  try {
    const url = new URL(`/content/${endpoint}`, baseUrl);
    const response = await fetch(url, {
      cache: "force-cache",
      signal: AbortSignal.timeout(8000),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return unavailable<T>();
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data) || !data.every(validate)) {
      return unavailable<T>();
    }

    return { available: true, items: data };
  } catch {
    return unavailable<T>();
  }
}

export function getProjects() {
  return getItems("projects", isProject);
}

export function getThoughts() {
  return getItems("thoughts", isThought);
}

export type { ContentResult, Project, Thought };
