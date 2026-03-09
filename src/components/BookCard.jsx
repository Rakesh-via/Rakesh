import React from 'react';
import { Card } from 'react-bootstrap';

const BookCard = ({ book, onClick }) => {
  return (
    <Card 
      className="h-100 shadow-sm book-card" 
      style={{ cursor: 'pointer' }}
      onClick={() => onClick(book)}
    >
      <div style={{ height: '250px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={book.imageUrl} 
          alt={book.title}
          style={{ 
            height: '100%', 
            width: '100%', 
            objectFit: 'cover' 
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fs-6 fw-bold">{book.title}</Card.Title>
        <Card.Text className="text-muted small mb-0">
          by {book.author}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;