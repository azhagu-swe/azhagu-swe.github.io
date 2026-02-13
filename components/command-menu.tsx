"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search,
    FileText,
    Briefcase,
    Home,
    Laptop,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Moon,
    Sun,
    Monitor
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Post } from "@/lib/types"

interface CommandMenuProps {
    posts?: Post[]
    projects?: Post[]
}

export function CommandMenu({ posts = [], projects = [] }: CommandMenuProps) {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        const openCommandMenu = () => setOpen(true)

        document.addEventListener("keydown", down)
        document.addEventListener("open-command-menu", openCommandMenu)
        return () => {
            document.removeEventListener("keydown", down)
            document.removeEventListener("open-command-menu", openCommandMenu)
        }
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Pages">
                        <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/projects'))}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/blog'))}>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Blog</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/contact'))}>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Contact</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator />

                    {projects.length > 0 && (
                        <>
                            <CommandGroup heading="Projects">
                                {projects.slice(0, 3).map((project) => (
                                    <CommandItem key={project.slug} onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}>
                                        <Briefcase className="mr-2 h-4 w-4" />
                                        <span>{project.frontmatter.title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {posts.length > 0 && (
                        <>
                            <CommandGroup heading="Recent Posts">
                                {posts.slice(0, 3).map((post) => (
                                    <CommandItem key={post.slug} onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}>
                                        <FileText className="mr-2 h-4 w-4" />
                                        <span>{post.frontmatter.title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light Mode</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark Mode</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <Monitor className="mr-2 h-4 w-4" />
                            <span>System</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Social">
                        <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/azhagu-swe", "_blank"))}>
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/azhagu-swe", "_blank"))}>
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.open("https://twitter.com/azhagu_swe", "_blank"))}>
                            <Twitter className="mr-2 h-4 w-4" />
                            <span>Twitter</span>
                        </CommandItem>
                    </CommandGroup>

                </CommandList>
            </CommandDialog>
        </>
    )
}
