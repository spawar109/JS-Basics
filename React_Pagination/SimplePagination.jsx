import React from 'react';

const SimplePagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  showInfo = true,
  totalItems = 0,
  itemsPerPage = 10
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const buttonStyle = {
    padding: '8px 12px',
    margin: '0 4px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const disabledStyle = {
    ...buttonStyle,
    backgroundColor: '#f5f5f5',
    color: '#999',
    cursor: 'not-allowed'
  };

  const activeStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: '#007bff'
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '10px',
      margin: '20px 0'
    }}>
      {showInfo && totalItems > 0 && (
        <div style={{ fontSize: '14px', color: '#666' }}>
          Showing {startItem} to {endItem} of {totalItems} results
        </div>
      )}
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={currentPage === 1 ? disabledStyle : buttonStyle}
        >
          Previous
        </button>
        
        <span style={{ 
          ...activeStyle,
          cursor: 'default'
        }}>
          {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={currentPage === totalPages ? disabledStyle : buttonStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimplePagination;