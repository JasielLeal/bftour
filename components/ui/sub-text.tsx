export function SubText({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={`text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed ${className ?? ""}`}>
            {children}
        </p>
    )
}