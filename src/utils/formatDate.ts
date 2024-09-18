
export const formatDate = (dateStr: string): string => {
    const dateObj = new Date(dateStr);

    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = dateObj.getUTCFullYear();

    return `${day}-${month}-${year}`;
};


