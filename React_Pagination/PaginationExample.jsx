import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import usePagination from './usePagination';

// Sample data generator
const generateSampleData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'][i % 5],
    price: Math.floor(Math.random() * 100) + 10,
    inStock: Math.random() > 0.3
  }));
};

const PaginationExample = () => {
  // Sample data
  const [totalItems] = useState(247); // Total items in your dataset
  const sampleData = useMemo(() => generateSampleData(totalItems), [totalItems]);
  
  // Different pagination configurations
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginationStyle, setPaginationStyle] = useState('default');

  // Using the custom hook
  const {
    currentPage,
    totalPages,
    paginationInfo,
    getPaginatedData,
    goToPage,
    goToNextPage,
    goToPrevPage,
    goToFirstPage,
    goToLastPage
  } = usePagination({
    totalItems,
    itemsPerPage,
    initialPage: 1
  });

  // Get current page data
  const currentPageData = getPaginatedData(sampleData);

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    goToFirstPage(); // Reset to first page when changing items per page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Pagination Examples</h1>
      
      {/* Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="items-per-page" style={{ marginRight: '8px' }}>
            Items per page:
          </label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            style={{ padding: '4px 8px' }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="pagination-style" style={{ marginRight: '8px' }}>
            Style:
          </label>
          <select
            id="pagination-style"
            value={paginationStyle}
            onChange={(e) => setPaginationStyle(e.target.value)}
            style={{ padding: '4px 8px' }}
          >
            <option value="default">Default</option>
            <option value="compact">Compact</option>
            <option value="large">Large</option>
            <option value="rounded">Rounded</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Sample Data Table</h2>
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  ID
                </th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  Name
                </th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  Category
                </th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  Price
                </th>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item, index) => (
                <tr key={item.id} style={{ 
                  backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa' 
                }}>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    {item.id}
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <div>
                      <div style={{ fontWeight: '500' }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {item.description}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2'
                    }}>
                      {item.category}
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    ${item.price}
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: item.inStock ? '#e8f5e8' : '#ffebee',
                      color: item.inStock ? '#2e7d32' : '#c62828'
                    }}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Standard Pagination */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Standard Pagination</h3>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          className={paginationStyle}
        />
      </div>

      {/* Minimal Pagination (only prev/next) */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Minimal Pagination (Prev/Next only)</h3>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          showFirstLast={false}
          maxVisiblePages={0}
          className="compact"
        />
      </div>

      {/* Custom Navigation Buttons */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Custom Navigation Buttons</h3>
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '10px'
        }}>
          <button 
            onClick={goToFirstPage}
            disabled={paginationInfo.isFirstPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: paginationInfo.isFirstPage ? 'not-allowed' : 'pointer',
              opacity: paginationInfo.isFirstPage ? 0.5 : 1
            }}
          >
            First
          </button>
          
          <button 
            onClick={goToPrevPage}
            disabled={!paginationInfo.hasPrevPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: !paginationInfo.hasPrevPage ? 'not-allowed' : 'pointer',
              opacity: !paginationInfo.hasPrevPage ? 0.5 : 1
            }}
          >
            Previous
          </button>
          
          <span style={{ 
            padding: '8px 16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#f8f9fa'
          }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            onClick={goToNextPage}
            disabled={!paginationInfo.hasNextPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: !paginationInfo.hasNextPage ? 'not-allowed' : 'pointer',
              opacity: !paginationInfo.hasNextPage ? 0.5 : 1
            }}
          >
            Next
          </button>
          
          <button 
            onClick={goToLastPage}
            disabled={paginationInfo.isLastPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: paginationInfo.isLastPage ? 'not-allowed' : 'pointer',
              opacity: paginationInfo.isLastPage ? 0.5 : 1
            }}
          >
            Last
          </button>
        </div>
        
        <div style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          Showing {paginationInfo.startItem} to {paginationInfo.endItem} of {totalItems} items
        </div>
      </div>

      {/* Pagination Info */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '16px', 
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h4>Pagination State Info:</h4>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Current Page: {currentPage}</li>
          <li>Total Pages: {totalPages}</li>
          <li>Items Per Page: {itemsPerPage}</li>
          <li>Total Items: {totalItems}</li>
          <li>Start Item: {paginationInfo.startItem}</li>
          <li>End Item: {paginationInfo.endItem}</li>
          <li>Has Next Page: {paginationInfo.hasNextPage ? 'Yes' : 'No'}</li>
          <li>Has Previous Page: {paginationInfo.hasPrevPage ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </div>
  );
};

export default PaginationExample;