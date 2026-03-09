import React, { useState, useEffect } from 'react';
import { Container, Spinner, Alert, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookDetailsModal from '../components/BookDetailsModal';

const HistoryBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchHistoryBooks();
  }, []);

  const fetchHistoryBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch history books');
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
            <h1 className="h4 m-0 fw-bold">History Books</h1>
            <Link to="/rakesh-history" className="btn btn-outline-primary btn-sm">
              Back to Collections
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="pb-5">
        <div className="mb-4">
          <h2 className="h3 fw-bold mb-2">Indian History Collection</h2>
          <p className="text-muted mb-0">
            Explore our curated selection of history books
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" className="mb-3">
              <span className="visually-hidden">Loading books...</span>
            </Spinner>
            <p className="text-muted">Loading history books...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="my-4">
            <Alert.Heading>Error Loading Books</Alert.Heading>
            <p>{error}</p>
            <Button variant="outline-danger" onClick={fetchHistoryBooks}>
              Try Again
            </Button>
          </Alert>
        )}

        {!loading && !error && books.length > 0 && (
          <div className="d-flex flex-column gap-3">
            {books.map((book) => (
              <Card
                key={book.id}
                className="shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBookClick(book)}
              >
                <Card.Body>
                  <Row className="g-3">
                    <Col xs={4} sm={3} md={2}>
                      <div
                        style={{
                          height: '120px',
                          overflow: 'hidden',
                          borderRadius: '0.375rem'
                        }}
                      >
                        <Card.Img
                          src={book.imageUrl}
                          alt={book.title}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={8} sm={9} md={10}>
                      <Card.Title className="fs-5 fw-bold mb-2">
                        {book.title}
                      </Card.Title>
                      <Card.Subtitle className="text-primary mb-2">
                        by {book.author}
                      </Card.Subtitle>
                      <Card.Text className="text-muted small mb-2 d-none d-md-block">
                        {book.description}
                      </Card.Text>
                      <div className="d-flex gap-3 text-muted small">
                        <span>
                          <strong>Year:</strong> {book.year}
                        </span>
                        <span>
                          <strong>Pages:</strong> {book.pages}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        {!loading && !error && books.length === 0 && (
          <Alert variant="info" className="my-4">
            No history books found. Please check back later.
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
            © 2024 History Books - Explore the Past
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default HistoryBooks;