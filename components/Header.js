import Image from 'next/image'
import headerStyle from '../styles/Header.module.css'
import headerImage from '../public/images/home-product.png'
const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.header_text}>
        <h1>
          <svg
            width='100'
            height='48'
            viewBox='0 0 381 180'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='#1F1F1F' fill-rule='nonzero'>
              <path d='M35.719 174.6c1.942-1.942 8.737-20.63 17.96-43.685 3.397-8.252 27.624-69.917 30.537-78.412 2.184-5.582 10.305-8.737 16.13-8.494 8.737.243 28.417 0 36.911 0 9.223 0 13.106-1.699 14.077-7.038.728-3.64-.971-7.038-4.126-8.98a8.524 8.524 0 00-.236-.128l-.243-.121c-2.59-1.245-6.575-1.48-20.268-1.495h-3.448c-6.066.006-34.285 1.737-44.137 1.744l-63.343.809C5.825 28.8.243 32.683.728 38.75c.97 8.495 6.796 8.495 17.474 8.01 3.883 0 30.823 0 39.317-.243 5.582 0 8.737 1.941 7.766 6.31C50.724 89.96 21.4 163.193 20.186 167.804c-1.213 4.126.729 8.738 4.369 10.436 4.126 1.457 8.494.243 11.164-3.64z'></path>
              <path d='M95.056 174.58c10.922 0 24.027-8.495 32.036-19.416 11.407-15.775 15.29-31.308 11.65-47.326-1.942-8.494-5.34-19.658-16.99-23.541-.727-.243-1.455-.728-1.94-1.457-8.98-8.98-20.873-1.698-30.58 10.194C78.31 106.382 72 122.4 72 146.427c0 13.834 8.252 28.153 23.056 28.153zm-6.795-25.969c0-18.202 11.164-52.665 22.57-52.665 6.796 0 12.863 14.32 12.863 25.969 0 15.532-14.319 34.705-27.424 36.161-5.582.728-8.01-4.368-8.01-9.465zm83.406 27.02c7.281 0 18.88-6.726 24.947-12.308 12.135-11.407 30.388-33.561 33.058-45.21.728-3.641-.728-6.796-3.64-8.495-5.938-3.155-8.829 2.745-19.212 16.866-5.467 7.435-14.28 18.325-23.26 26.091-5.097 4.126-12.135 8.495-16.261 6.31-6.796-4.368-5.097-19.415-2.427-35.676.485-3.155 2.836-17.492 6.795-29.905 9.18-28.78 11.893-33.75 24.947-58.495 7.298-9.253 10.206-18.384 1.756-19.392-6.706-.8-10.393 3.479-14.81 10.319-16.002 24.78-23.542 49.904-31.794 80.727-8.737 32.521-10.921 69.168 19.901 69.168zm65.367 2.104c7.766 0 16.018-4.854 23.056-10.922 3.08-2.749 8.8-9.684 14.293-16.899l1.132-1.495c6.2-8.232 11.852-16.478 12.728-18.98 1.213-3.641-.243-7.524-3.398-9.223-7.766-4.126-10.921 2.67-18.445 13.59-.65.847-1.3 1.703-1.953 2.563l-1.31 1.726c-6.998 9.224-14.277 18.63-22.463 22.408-3.883 1.7-7.038.728-9.222-2.912-4.126-6.553-3.105-17.033-1.649-33.293 1.163-2.591 16.939-21.556 28.83-36.36 7.524-9.466 13.834-19.417 18.688-29.61 1.7-3.64 3.883-4.854 7.524-4.611l2.18.09 10.324-.09 12.101.177c10.651.383 21.257.073 20.617-8.672-.417-6.266-6.415-7.18-15.186-7.72-4.682-.289-23.14-.046-24.697-.046-2.912 0-3.155-.485-2.67-3.398 2.67-12.377 4.612-16.988.729-25.483-2.913-6.31-9.95-8.98-16.99-6.31-9.707 3.64-22.327 18.93-28.88 30.58-1.942 3.398-3.883 4.611-7.766 4.368-1.333-.074-2.824-.102-4.804-.107h-1.032c-4.184.006-4.358.092-15.089.106l-2.86.001c-9.256-.107-12.377 2.485-12.377 8.01 0 3.155 1.456 5.824 5.097 7.523 1.485.626 3.875.759 6.9.742l1.65-.01 1.646-.008c12.042-.053 17.228.037 17.228 1.46 0 1.7-6.553 16.504-11.406 34.706-5.582 21.6-7.767 41.016-7.039 59.218.728 15.533 9.95 28.88 24.513 28.88zm22.57-141.25c.578-1.155 2.914-4.49 5.522-7.833l.63-.802c3.804-4.797 7.925-9.255 7.925-6.897 0 3.883-2.184 15.532-6.068 16.26-6.31.243-8.009.243-8.009-.728zm-22.57 51.937c3.155-11.649 6.067-20.386 11.164-31.793 1.213-2.427 2.427-2.912 7.28-2.912h.193l.486.001c1.63.009 4.661.068 4.661.484 0 2.1-5.492 10.083-11.198 17.81l-.926 1.25a652.82 652.82 0 01-11.66 15.16zm98.05 90.04c9.95 0 20.628-10.678 28.395-22.084a113.74 113.74 0 001.39-2.062l.138-.214c.069-.106.136-.212.203-.318l.134-.214.134-.219c1.353-2.215 3.026-5.44 11.592-20.515 2.912-5.097 2.67-10.436-1.942-13.106-6.795-4.126-10.679 2.67-15.532 11.892-3.884 7.281-17.96 29.124-22.814 29.124-2.184 0-3.155-11.407-2.427-16.746 1.699-11.164 3.398-22.813 6.31-34.22 3.883-14.32-6.067-29.367-19.658-32.522C309.6 74.588 297.222 84.054 288 97.16c-9.465 13.348-15.047 29.609-18.688 47.325-1.941 9.223-.485 22.571 8.252 26.94 4.369 2.184 9.465 1.941 14.805-.971 13.833-7.524 23.056-28.638 25.725-30.094 0 0-.097 5.05.016 10.667l.025 1.093c.073 2.927.207 5.927.445 8.383.97 10.922 6.553 17.96 16.503 17.96zm-49.268-23.54c-2.185 0 .485-14.562 2.912-22.086 3.64-12.135 8.98-22.085 15.775-30.58 5.34-6.553 11.65-11.65 16.504-6.795 1.941 1.941 2.427 2.912.97 5.339-3.397 5.582-6.552 11.164-9.707 16.746-5.582 9.95-10.194 16.989-13.349 22.328-1.699 3.155-9.708 15.047-13.105 15.047z'></path>
            </g>
          </svg>
        </h1>
        <h2 className={headerStyle.heading}>
          <span className={headerStyle.highlight}>Track</span>,<span> </span>
          <span className={headerStyle.highlight}>analyse</span> and
          <span> </span>
          <span className={headerStyle.highlight}>share</span> your social &
          sales data
        </h2>
        <h3 className={headerStyle.description}>
          Monitor your stats from around the web, view analytics in Tolta, and
          embed live counters on any website.
        </h3>
      </div>
      <div className={headerStyle.header_image}>
        <Image src={headerImage} alt='Header-Image' />
      </div>
    </header>
  )
}

export default Header
