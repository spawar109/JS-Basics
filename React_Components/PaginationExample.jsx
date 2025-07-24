import React, { useState } from 'react';
import Pagination from './Pagination';
import usePagination from './usePagination';
import './PaginationExample.css';

// Sample data generator
const generateSampleData = (count = 150) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'][i % 5],
    price: Math.floor(Math.random() * 500) + 10,
    description: `This is a description for item ${i + 1}. Lorem ipsum dolor sit amet.`
  }));
};

const PaginationExample = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [theme, setTheme] = useState('default');
  const sampleData = generateSampleData(150);

  // Using the custom pagination hook
  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    paginationInfo
  } = usePagination(sampleData, itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="pagination-example">
      <h1>React Pagination Example</h1>
      
      {/* Controls */}
      <div className="controls">
        <div className="control-group">
          <label htmlFor="itemsPerPage">Items per page:</label>
          <select 
            id="itemsPerPage"
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        
        <div className="control-group">
          <label htmlFor="theme">Theme:</label>
          <select 
            id="theme"
            value={theme} 
            onChange={handleThemeChange}
          >
            <option value="default">Default</option>
            <option value="dark">Dark</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
      </div>

      {/* Pagination Info */}
      <div className="pagination-info">
        <p>
          Showing {paginationInfo.startIndex} to {paginationInfo.endIndex} of{' '}
          {paginationInfo.totalItems} items (Page {paginationInfo.currentPage} of{' '}
          {paginationInfo.totalPages})
        </p>
      </div>

      {/* Data Grid */}
      <div className="data-grid">
        <div className="grid-header">
          <div className="grid-cell">ID</div>
          <div className="grid-cell">Name</div>
          <div className="grid-cell">Category</div>
          <div className="grid-cell">Price</div>
          <div className="grid-cell">Description</div>
        </div>
        
        {currentData.map((item) => (
          <div key={item.id} className="grid-row">
            <div className="grid-cell">{item.id}</div>
            <div className="grid-cell">{item.name}</div>
            <div className="grid-cell">{item.category}</div>
            <div className="grid-cell">${item.price}</div>
            <div className="grid-cell">{item.description}</div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        className={theme}
        maxVisiblePages={5}
        showFirstLast={true}
        showPrevNext={true}
      />

      {/* Example Code Display */}
      <div className="code-example">
        <h3>Usage Example:</h3>
        <pre>
{`import React from 'react';
import Pagination from './Pagination';
import usePagination from './usePagination';

const MyComponent = () => {
  const data = [/* your data array */];
  
  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    paginationInfo
  } = usePagination(data, 10); // 10 items per page

  return (
    <div>
      {/* Render your data */}
      {currentData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        maxVisiblePages={5}
        showFirstLast={true}
        showPrevNext={true}
      />
    </div>
  );
};`}
        </pre>
      </div>

      {/* API Documentation */}
      <div className="api-docs">
        <h3>Pagination Component Props:</h3>
        <ul>
          <li><strong>currentPage</strong> (number): Current active page</li>
          <li><strong>totalPages</strong> (number): Total number of pages</li>
          <li><strong>onPageChange</strong> (function): Callback when page changes</li>
          <li><strong>showFirstLast</strong> (boolean): Show first/last buttons (default: true)</li>
          <li><strong>showPrevNext</strong> (boolean): Show prev/next buttons (default: true)</li>
          <li><strong>maxVisiblePages</strong> (number): Max page numbers to show (default: 5)</li>
          <li><strong>className</strong> (string): Additional CSS classes</li>
          <li><strong>disabled</strong> (boolean): Disable all pagination controls</li>
        </ul>

        <h3>usePagination Hook:</h3>
        <ul>
          <li><strong>data</strong> (array): Array of data to paginate</li>
          <li><strong>itemsPerPage</strong> (number): Items per page (default: 10)</li>
          <li><strong>initialPage</strong> (number): Initial page (default: 1)</li>
        </ul>
      </div>
    </div>
  );
};

export default PaginationExample;