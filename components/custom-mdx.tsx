import React from "react"
import * as runtime from "react/jsx-runtime"
import { components } from "@/components/mdx-components"

export function CustomMDX({ source }: { source: string }) {
    const Component = React.useMemo(() => {
        const fn = new Function("runtime", `
            return (function() {
                ${source}
            })(runtime);
        `)
        return fn({ ...runtime }).default
    }, [source])

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    )
}
