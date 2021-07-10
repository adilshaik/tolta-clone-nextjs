import counterFormStyle from '../styles/CounterForm.module.css'
const counterForm = () => {
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
      <div className={counterFormStyle.form_description}>
        Free unlimited trial. No credit card required.
      </div>
    </article>
  )
}

export default counterForm
