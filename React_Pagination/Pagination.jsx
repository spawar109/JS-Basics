import React, { useState, useMemo } from 'react';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 10,
  totalItems,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = '',
  disabled = false
}) => {
  // Calculate visible page numbers
  const visiblePages = useMemo(() => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    const adjustedStartPage = Math.max(1, endPage - maxVisiblePages + 1);

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  // Calculate items info
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageClick = (page) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`pagination-container ${className}`}>
      {/* Items info */}
      <div className="pagination-info">
        Showing {startItem} to {endItem} of {totalItems} items
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {/* First page */}
        {showFirstLast && currentPage > 1 && (
          <>
            <button
              className="pagination-btn pagination-first"
              onClick={() => handlePageClick(1)}
              disabled={disabled}
              aria-label="First page"
            >
              ««
            </button>
          </>
        )}

        {/* Previous page */}
        {showPrevNext && (
          <button
            className={`pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={disabled || currentPage === 1}
            aria-label="Previous page"
          >
            ‹
          </button>
        )}

        {/* Page numbers */}
        {visiblePages[0] > 1 && (
          <>
            <button
              className="pagination-btn"
              onClick={() => handlePageClick(1)}
              disabled={disabled}
            >
              1
            </button>
            {visiblePages[0] > 2 && <span className="pagination-ellipsis">...</span>}
          </>
        )}

        {visiblePages.map((page) => (
          <button
            key={page}
            className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="pagination-ellipsis">...</span>
            )}
            <button
              className="pagination-btn"
              onClick={() => handlePageClick(totalPages)}
              disabled={disabled}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next page */}
        {showPrevNext && (
          <button
            className={`pagination-btn pagination-next ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={disabled || currentPage === totalPages}
            aria-label="Next page"
          >
            ›
          </button>
        )}

        {/* Last page */}
        {showFirstLast && currentPage < totalPages && (
          <button
            className="pagination-btn pagination-last"
            onClick={() => handlePageClick(totalPages)}
            disabled={disabled}
            aria-label="Last page"
          >
            »»
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;