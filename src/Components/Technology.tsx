const Technology = ({
  name,
  icon,
  imagePath = null,
  keyId,
}: {
  name: string
  icon?: string
  imagePath?: string | null
  keyId: number
}) => {
  return (
    <div
      className='technology relative transition-all duration-500 ease-in'
      key={keyId}
    >
      {icon ? <i className={` ${icon} text-4xl`}></i> : null}
      {imagePath && !icon ? (
        <img src={imagePath} alt={name} className='h-10' />
      ) : null}
      <p className='techName'>{name}</p>
    </div>
  )
}

export default Technology
