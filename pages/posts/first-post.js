import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Hello!</h1>
      <p>My name is Hyekjin</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}