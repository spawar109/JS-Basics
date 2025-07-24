# React Pagination Components

A comprehensive set of React pagination components with modern styling, accessibility features, and flexible customization options.

## Components Included

1. **Pagination** - Full-featured pagination component with page numbers, navigation controls, and ellipsis
2. **SimplePagination** - Lightweight pagination with just previous/next buttons
3. **usePagination** - Custom hook for pagination logic
4. **PaginationExample** - Complete example showing all features

## Features

- ✅ Responsive design
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ Dark mode support
- ✅ Multiple size variants (compact, default, large)
- ✅ Custom styling options
- ✅ TypeScript ready
- ✅ Zero dependencies (except React)
- ✅ Ellipsis for large page ranges
- ✅ Customizable visible page count
- ✅ First/Last page buttons
- ✅ Items per page info display

## Quick Start

### Basic Usage

```jsx
import React, { useState } from 'react';
import Pagination from './Pagination';
import './Pagination.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 247;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
    />
  );
}
```

### With Custom Hook

```jsx
import React from 'react';
import Pagination from './Pagination';
import usePagination from './usePagination';

function DataTable({ data }) {
  const {
    currentPage,
    totalPages,
    getPaginatedData,
    goToPage,
    paginationInfo
  } = usePagination({
    totalItems: data.length,
    itemsPerPage: 10
  });

  const currentData = getPaginatedData(data);

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
        itemsPerPage={10}
        totalItems={data.length}
      />
    </div>
  );
}
```

### Simple Pagination

```jsx
import React, { useState } from 'react';
import SimplePagination from './SimplePagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <SimplePagination
      currentPage={currentPage}
      totalPages={25}
      onPageChange={setCurrentPage}
      totalItems={247}
      itemsPerPage={10}
    />
  );
}
```

## API Reference

### Pagination Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | **Required** | Current active page number |
| `totalPages` | `number` | **Required** | Total number of pages |
| `onPageChange` | `function` | **Required** | Callback when page changes |
| `itemsPerPage` | `number` | `10` | Number of items per page |
| `totalItems` | `number` | **Required** | Total number of items |
| `showFirstLast` | `boolean` | `true` | Show first/last page buttons |
| `showPrevNext` | `boolean` | `true` | Show previous/next buttons |
| `maxVisiblePages` | `number` | `5` | Maximum number of visible page buttons |
| `className` | `string` | `''` | Additional CSS class |
| `disabled` | `boolean` | `false` | Disable all pagination controls |

### SimplePagination Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | **Required** | Current active page number |
| `totalPages` | `number` | **Required** | Total number of pages |
| `onPageChange` | `function` | **Required** | Callback when page changes |
| `showInfo` | `boolean` | `true` | Show items count info |
| `totalItems` | `number` | `0` | Total number of items |
| `itemsPerPage` | `number` | `10` | Number of items per page |

### usePagination Hook

```jsx
const {
  currentPage,        // Current page number
  totalPages,         // Total number of pages
  itemsPerPage,       // Items per page
  totalItems,         // Total items count
  paginationInfo,     // Detailed pagination info
  getPaginatedData,   // Function to get current page data
  goToPage,          // Function to go to specific page
  goToNextPage,      // Function to go to next page
  goToPrevPage,      // Function to go to previous page
  goToFirstPage,     // Function to go to first page
  goToLastPage,      // Function to go to last page
  resetPagination,   // Function to reset to page 1
  setCurrentPage     // Direct page setter
} = usePagination({
  totalItems: 100,
  itemsPerPage: 10,
  initialPage: 1,
  maxVisiblePages: 5
});
```

## Styling Options

### CSS Classes

- `.pagination-container` - Main container
- `.pagination-container.compact` - Compact size variant
- `.pagination-container.large` - Large size variant
- `.pagination-container.rounded` - Rounded buttons variant

### Custom Styling

```css
/* Custom theme example */
.my-custom-pagination .pagination-btn {
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.my-custom-pagination .pagination-btn.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

## Advanced Examples

### Server-Side Pagination

```jsx
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

function ServerPaginatedList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/data?page=${page}&limit=${itemsPerPage}`);
      const result = await response.json();
      setData(result.data);
      setTotalItems(result.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {loading && <div>Loading...</div>}
      
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        disabled={loading}
      />
    </div>
  );
}
```

### URL-Based Pagination

```jsx
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from './Pagination';

function URLPaginatedList() {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState([]);
  
  // Get page from URL
  const urlParams = new URLSearchParams(location.search);
  const currentPage = parseInt(urlParams.get('page')) || 1;
  
  const totalItems = 247;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    const newParams = new URLSearchParams(location.search);
    newParams.set('page', page.toString());
    history.push(`${location.pathname}?${newParams.toString()}`);
  };

  return (
    <div>
      {/* Your data rendering */}
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  );
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)

## License

MIT License - feel free to use in your projects!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Happy paginating! 🚀**