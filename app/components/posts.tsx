import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/work/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 link-hover"
            href={`/work/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 w-[150px] tracking-tight">                
                {post.metadata.name}
              </p>
              <p className="text-neutral-400 dark:text-neutral-400 w-[250px] tabular-nums">
                {post.metadata.title}
              </p>              
            </div>
            <img className='image' src={post.metadata.image}/>
          </Link>
        ))}
    </div>
  )
}
