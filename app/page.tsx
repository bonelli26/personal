import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Sebastian Bonelli
            </h1>
            <p className="mb-4">
                I am a web developer with deep experience in building and optimizing websites. I specialize in frontend development and content management systems, working with technologies like HTML, CSS, JavaScript, as well as platforms like Shopify and languages like PHP.
            </p>
            <p className="mb-8">Hire me to build out entire websites (ecomm & non ecomm), select pages, or just a few features. I can adapt flexibly to your needs and lead or supplement the development of your site.</p>

            <h2 className="mb-4 text-[30px]">Past work</h2>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
