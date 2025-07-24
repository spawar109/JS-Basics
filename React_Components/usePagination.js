import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for pagination logic
 * @param {Array} data - The array of data to paginate
 * @param {number} itemsPerPage - Number of items to show per page
 * @param {number} initialPage - Initial page number (default: 1)
 * @returns {Object} Pagination state and controls
 */
const usePagination = (data = [], itemsPerPage = 10, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  // Calculate current page data
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  // Navigation functions
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const goToNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  // Reset to first page when data changes
  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // Pagination info
  const paginationInfo = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, data.length);
    
    return {
      startIndex,
      endIndex,
      totalItems: data.length,
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
      isFirstPage: currentPage === 1,
      isLastPage: currentPage === totalPages
    };
  }, [currentPage, itemsPerPage, data.length, totalPages]);

  return {
    // Data
    currentData,
    
    // State
    currentPage,
    totalPages,
    
    // Navigation
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
    resetPagination,
    
    // Info
    paginationInfo
  };
};

export default usePagination;