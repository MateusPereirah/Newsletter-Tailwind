const Article = ({title, text, tags, image, alt}) => {
    return (
        <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center">
            <h3 className="text-lg font-bold text-alura-200 dark:text-gray-200">{title}</h3>

            <div className="w-full flex flex-row justify-end gap-2 pr-5">
                {tags.map((tag) => <span key={tag} className="bg-alura-100 rounded-full px-4 py-1 text-gray-200 text-xs uppercase dark:bg-dark-100 font-bold hidden sm:flex">{tag}</span>)}
            </div>
            <div className="grid gap-1">
                {text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400">{content}</p>)}
                <img className="sm:p-4" src={image} />
                {<span className="sr-only">{alt}</span>}
            </div>
        </div>
    );
}

export default Article;