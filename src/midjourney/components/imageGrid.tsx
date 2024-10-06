export const ImageCard = (props) => {
  return (
    <section>
      <div>
        <h3>Image Grid</h3>
        <div>{props.value}</div>
        <img width={800} src={props.src} />
      </div>
    </section>
  )
}
