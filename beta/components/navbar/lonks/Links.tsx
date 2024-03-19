import Link from "next/link"
const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "about",
            path: "/about"
        },
        {
            title: "career",
            path: "/about/career"
        }
    ]
    return (
        <div>
            {links.map((link => (
                <Link href={link.path} key={link.path} >{link.title}</Link>
)))}
        </div>
    )
}
export default Links