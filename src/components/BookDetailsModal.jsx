import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookDetailsModal = ({ book, show, handleClose }) => {
  if (!book) return null;

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      size="lg"
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-5">{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <img 
              src={book.imageUrl} 
              alt={book.title} 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <h5 className="mb-2">About the Author</h5>
            <p className="text-primary mb-3">{book.author}</p>
            
            <h5 className="mb-2">Description</h5>
            <p className="mb-3">{book.description}</p>
            
            <div className="row">
              <div className="col-6 mb-2">
                <strong>Year Published:</strong>
                <p className="mb-0">{book.year}</p>
              </div>
              <div className="col-6 mb-2">
                <strong>Pages:</strong>
                <p className="mb-0">{book.pages}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetailsModal;