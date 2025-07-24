# React Pagination Components

A comprehensive and customizable React pagination solution with modern styling and accessibility features.

## Features

✨ **Modern Design** - Clean, professional styling with multiple themes  
🎨 **Customizable** - Multiple themes (default, dark, minimal) and customizable styling  
📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
♿ **Accessible** - Full ARIA support and keyboard navigation  
🚀 **Performance** - Optimized with React hooks and memoization  
🎯 **TypeScript Ready** - Easy to add TypeScript support  
🔧 **Flexible API** - Comprehensive props and customization options  

## Quick Start

### Basic Usage

```jsx
import React from 'react';
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
};
```

## Files Included

- `Pagination.jsx` - Main pagination component
- `Pagination.css` - Styling for the pagination component
- `usePagination.js` - Custom React hook for pagination logic
- `PaginationExample.jsx` - Complete example with demo data
- `PaginationExample.css` - Styling for the example component

## API Reference

### Pagination Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | number | - | Current active page (required) |
| `totalPages` | number | - | Total number of pages (required) |
| `onPageChange` | function | - | Callback when page changes (required) |
| `showFirstLast` | boolean | true | Show first/last navigation buttons |
| `showPrevNext` | boolean | true | Show previous/next navigation buttons |
| `maxVisiblePages` | number | 5 | Maximum number of page buttons to display |
| `className` | string | '' | Additional CSS classes |
| `disabled` | boolean | false | Disable all pagination controls |

### usePagination Hook

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `data` | array | [] | Array of data to paginate |
| `itemsPerPage` | number | 10 | Number of items per page |
| `initialPage` | number | 1 | Initial page number |

#### Returns

```jsx
{
  // Data
  currentData,        // Current page's data
  
  // State
  currentPage,        // Current page number
  totalPages,         // Total number of pages
  
  // Navigation functions
  goToPage,           // (page: number) => void
  goToNextPage,       // () => void
  goToPreviousPage,   // () => void
  goToFirstPage,      // () => void
  goToLastPage,       // () => void
  resetPagination,    // () => void
  
  // Information object
  paginationInfo: {
    startIndex,       // First item index on current page
    endIndex,         // Last item index on current page
    totalItems,       // Total number of items
    currentPage,      // Current page number
    totalPages,       // Total number of pages
    hasNextPage,      // Boolean: has next page
    hasPreviousPage,  // Boolean: has previous page
    isFirstPage,      // Boolean: is first page
    isLastPage        // Boolean: is last page
  }
}
```

## Styling and Themes

### Default Theme

The default theme provides a clean, modern look with subtle shadows and hover effects.

```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={goToPage}
/>
```

### Dark Theme

Apply the dark theme by adding the `dark` class:

```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={goToPage}
  className="dark"
/>
```

### Minimal Theme

Apply the minimal theme for a cleaner look:

```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={goToPage}
  className="minimal"
/>
```

### Custom Styling

You can override the default styles by targeting the CSS classes:

```css
.pagination-container {
  /* Container styles */
}

.pagination-link {
  /* Button styles */
}

.pagination-link.active {
  /* Active page styles */
}

.pagination-link:disabled {
  /* Disabled state styles */
}
```

## Advanced Examples

### Server-Side Pagination

```jsx
const ServerPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/data?page=${page}&limit=10`);
      const result = await response.json();
      setData(result.data);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))
      )}
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        disabled={loading}
      />
    </div>
  );
};
```

### With Search and Filtering

```jsx
const FilterablePagination = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allData = [/* your complete data */];

  const filteredData = useMemo(() => {
    return allData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allData, searchTerm, selectedCategory]);

  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    resetPagination
  } = usePagination(filteredData, 10);

  // Reset to first page when filters change
  useEffect(() => {
    resetPagination();
  }, [searchTerm, selectedCategory, resetPagination]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      {currentData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
};
```

## Accessibility

This pagination component includes comprehensive accessibility features:

- **ARIA Labels**: All buttons have descriptive `aria-label` attributes
- **ARIA Current**: The current page is marked with `aria-current="page"`
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic HTML structure with proper navigation landmarks

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

MIT License - feel free to use in your projects!

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.