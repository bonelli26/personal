import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Sebastian Bonelli
      </h1>
      <p className="mb-4">
        {`I am a web developer with experience in designing, building, and optimizing websites. My focus is on creating efficient, intuitive, and visually engaging solutions that enhance user experience. I specialize in frontend development, working with technologies like HTML, CSS, JavaScript, as well as platforms like Shopify and languages like PHP. I am passionate about continuously learning the latest trends and tools in web development, which allows me to adapt my skills to current technological challenges and anticipate users' needs.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
