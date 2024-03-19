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
        <div className='flex justify-center gap-10'>
            {links.map((link => (
                <Link className='justify-between' href={link.path} key={link.path} >{link.title}</Link>
)))}
        </div>
    )
}
export default Links