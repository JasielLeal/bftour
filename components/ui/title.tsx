export function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-3xl font-bold text-gray-800">
            {children}
        </h1>
    )
}