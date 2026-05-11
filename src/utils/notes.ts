export type Note = {
    slug: string;
    data: {
        title: string;
        date: string;
        updated?: string;
        tags?: string[];
    };
    render: () => Promise<{ Content: any }>;
    content: any;
    url: string;
};

export function notesWithUrls(notes: any[]): Note[] {
    return notes.map((note) => ({
        ...note,
        url: "/notes/" + note.slug,
    })) as Note[];
}

export function sortNotesByDate(notes: Note[]): Note[] {
    return notes.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}

export function getAllTags(notes: Note[]): string[] {
    let tags = new Set<string>();

    for (let note of notes) {
        for (let tag of note.data.tags ?? []) {
            tags.add(tag);
        }
    }

    return [...tags].sort((a, b) => a.localeCompare(b));
}

export function getNotesByTag(notes: Note[], tag: string): Note[] {
    return notes.filter((note) => (note.data.tags ?? []).includes(tag));
}

export function tagHref(tag: string): string {
    return "/notes/tags/" + encodeURIComponent(tag);
}
