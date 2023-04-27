import React,
{
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";

export type IBlog = {
    content: string
}

export interface BlogContextInterface {
    content: IBlog,
    setContent: Dispatch<SetStateAction<IBlog>>
}

const defaultState: BlogContextInterface = {
    content: {
        content: ""
    },
    setContent: (content) => { }
}

export const BlogContext = createContext(defaultState);

type BlogProviderProps = {
    children: ReactNode
}

const BlogProvider = ({ children }: BlogProviderProps) => {

    const [content, setContent] = useState<IBlog>({
        content: ""
    })

    return (
        <BlogContext.Provider value={{ content, setContent }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider