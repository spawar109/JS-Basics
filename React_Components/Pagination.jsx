import React from 'react';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = '',
  disabled = false
}) => {
  // Helper function to generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're at the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages && !disabled) {
      onPageChange(page);
    }
  };

  const pageNumbers = generatePageNumbers();
  const showLeftEllipsis = pageNumbers[0] > 2;
  const showRightEllipsis = pageNumbers[pageNumbers.length - 1] < totalPages - 1;

  if (totalPages <= 1) {
    return null; // Don't render pagination if there's only one page or no pages
  }

  return (
    <nav className={`pagination-container ${className}`} aria-label="Pagination">
      <ul className="pagination">
        {/* First Page Button */}
        {showFirstLast && currentPage > 1 && (
          <li className="pagination-item">
            <button
              className="pagination-link"
              onClick={() => handlePageClick(1)}
              disabled={disabled}
              aria-label="Go to first page"
            >
              &laquo;
            </button>
          </li>
        )}

        {/* Previous Page Button */}
        {showPrevNext && (
          <li className="pagination-item">
            <button
              className="pagination-link"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1 || disabled}
              aria-label="Go to previous page"
            >
              &lsaquo;
            </button>
          </li>
        )}

        {/* First page number if not visible and there's a gap */}
        {showLeftEllipsis && (
          <>
            <li className="pagination-item">
              <button
                className="pagination-link"
                onClick={() => handlePageClick(1)}
                disabled={disabled}
              >
                1
              </button>
            </li>
            <li className="pagination-item">
              <span className="pagination-ellipsis">...</span>
            </li>
          </>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <li key={page} className="pagination-item">
            <button
              className={`pagination-link ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
              disabled={disabled}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Last page number if not visible and there's a gap */}
        {showRightEllipsis && (
          <>
            <li className="pagination-item">
              <span className="pagination-ellipsis">...</span>
            </li>
            <li className="pagination-item">
              <button
                className="pagination-link"
                onClick={() => handlePageClick(totalPages)}
                disabled={disabled}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Next Page Button */}
        {showPrevNext && (
          <li className="pagination-item">
            <button
              className="pagination-link"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages || disabled}
              aria-label="Go to next page"
            >
              &rsaquo;
            </button>
          </li>
        )}

        {/* Last Page Button */}
        {showFirstLast && currentPage < totalPages && (
          <li className="pagination-item">
            <button
              className="pagination-link"
              onClick={() => handlePageClick(totalPages)}
              disabled={disabled}
              aria-label="Go to last page"
            >
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;