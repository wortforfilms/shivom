import React, { useState } from 'react';

interface Book {
  cover: string;
  index: string[];
  chapters: string[];
  dictionaryRefs: string[];
}

const BookDesigner = () => {
  const [book, setBook] = useState<Book>({
    cover: '',
    index: [],
    chapters: [],
    dictionaryRefs: [],
  });

  const [index,setIndex]=useState<any>([])

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prevBook) => ({ ...prevBook, cover: event.target.value }));
  };

  const handleIndexChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const index = event.target.value.split('\n');
    setBook((prevBook) => ({ ...prevBook, index }));
  };

  const handleChapterChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const chapters = event.target.value.split('\n');
    setBook((prevBook) => ({ ...prevBook, chapters }));
  };

  const handleDictionaryRefsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const dictionaryRefs = event.target.value.split('\n');
    setBook((prevBook) => ({ ...prevBook, dictionaryRefs }));
  };

  return (
    <div>
      <h1>Book Designer</h1>
      <label htmlFor="cover">Cover:</label>
      <input
        type="text"
        id="cover"
        value={book.cover}
        onChange={handleCoverChange}
      />

      <label htmlFor="index">Index:</label>
      <textarea id="index" value={book.index.join('\n')} onChange={handleIndexChange} />

      <label htmlFor="chapters">Chapters:</label>
      <textarea id="chapters" value={book.chapters.join('\n')} onChange={handleChapterChange} />

      <label htmlFor="dictionaryRefs">Dictionary References:</label>
      <textarea
        id="dictionaryRefs"
        value={book.dictionaryRefs.join('\n')}
        onChange={handleDictionaryRefsChange}
      />

      <h2>Preview:</h2>
      <div>
        <h3>Cover:</h3>
        <img src={book.cover} alt="Book Cover" />
      </div>

      <div>
        <h3>Index:</h3>
        <ul>
          {book.index.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Chapters:</h3>
        <ol>
          {book.chapters.map((chapter, index) => (
            <li key={index}>{chapter}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3>Dictionary References:</h3>
        <ul>
          {book.dictionaryRefs.map((ref, index) => (
            <li key={index}>{ref}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookDesigner;
