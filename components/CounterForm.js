import counterFormStyle from '../styles/CounterForm.module.css'
const counterForm = ({ paragraph }) => {
  return (
    <article className={counterFormStyle.article}>
      <form className={counterFormStyle.form}>
        <div className={counterFormStyle.input}>
          <input type='email' name='signup' placeholder='you@email.com' />
        </div>
        <div className={counterFormStyle.button}>
          <button type='submit'>Create your first counter</button>
        </div>
      </form>
      <div className={counterFormStyle.form_description}>{paragraph}</div>
    </article>
  )
}

export default counterForm
