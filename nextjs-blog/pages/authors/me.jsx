import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Sobre o Autor</h1>
      <h2>
        <Link href="/">
          <a>Voltar a home</a>
        </Link>
      </h2>
    </>
  )
}