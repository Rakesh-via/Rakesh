import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookDetailsModal from '../components/BookDetailsModal';

const RakeshHistory = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 mb-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h4 m-0 fw-bold">Rakesh History</h1>
            <Link to="/" className="btn btn-outline-primary btn-sm">
              Home
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="pb-5">
        <div className="mb-4">
          <h2 className="h3 fw-bold mb-2">Indian History Books</h2>
          <p className="text-muted mb-0">
            Discover 10 popular books exploring India's rich historical heritage
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" className="mb-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="text-muted">Loading books...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="my-4">
            <Alert.Heading>Error Loading Books</Alert.Heading>
            <p>{error}</p>
          </Alert>
        )}

        {!loading && !error && books.length > 0 && (
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {books.map((book) => (
              <Col key={book.id}>
                <BookCard book={book} onClick={handleBookClick} />
              </Col>
            ))}
          </Row>
        )}

        {!loading && !error && books.length === 0 && (
          <Alert variant="info" className="my-4">
            No books found. Please check back later.
          </Alert>
        )}
      </Container>

      {/* Book Details Modal */}
      <BookDetailsModal 
        book={selectedBook} 
        show={!!selectedBook} 
        handleClose={handleCloseModal} 
      />

      {/* Footer */}
      <footer className="bg-white border-top py-3 mt-auto">
        <Container>
          <p className="text-center text-muted small mb-0">
            © 2024 Rakesh History - Celebrating India's Rich Heritage
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default RakeshHistory;