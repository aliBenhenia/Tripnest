'use client';
import React, { useEffect } from 'react';

const ItemCollapse: React.FC = () => {
    useEffect(() => {
        const handleCollapseClick = (event: Event) => {
            const item = event.currentTarget as HTMLElement;
            const parent = item.closest('.block-filter');
            if (!parent) return;

            const boxCollapse = parent.querySelector('.box-collapse') as HTMLElement;

            // Toggle display between 'none' and 'block'
            if (boxCollapse.style.display === 'none' || !boxCollapse.style.display || boxCollapse.style.display === '') {
                boxCollapse.style.display = 'block';
            } else {
                boxCollapse.style.display = 'none';
            }

            // Toggle collapsed class
            item.classList.toggle('collapsed-item');
        };

        const initializeCollapsible = () => {
            const collapsibleItems = document.querySelectorAll('.item-collapse');

            collapsibleItems.forEach(item => {
                item.addEventListener('click', handleCollapseClick);
            });

            // Set initial display state
            const boxCollapses = document.querySelectorAll('.box-collapse');
            boxCollapses.forEach(boxCollapse => {
                (boxCollapse as HTMLElement).style.display = 'block'; // Type assertion
            });

            return () => {
                collapsibleItems.forEach(item => {
                    item.removeEventListener('click', handleCollapseClick);
                });
            };
        };

        initializeCollapsible();

        // Cleanup event listeners on component unmount
        return () => {
            const collapsibleItems = document.querySelectorAll('.item-collapse');
            collapsibleItems.forEach(item => {
                item.removeEventListener('click', handleCollapseClick);
            });
        };
    }, []); // Empty dependency array to run once after the initial render

    return null; // or return <div /> if you need an element to be rendered
};

export default ItemCollapse;
