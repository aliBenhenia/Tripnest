export default function ByPagination({ handlePreviousPage, totalPages, currentPage, handlePageChange, handleNextPage }: any) {

	return (
		<>
			<nav aria-label="Page navigation example">
				<div className="pagination">
					<span className="page-item" onClick={handlePreviousPage}>
						<span className="page-link">
							<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</span>
					</span>
					{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
					<span 
						className={page === currentPage ? "page-item active" : "page-item"}
						key={page}
						onClick={() => handlePageChange(page)}
					>
						<span className="page-link">
							{page}						
						</span>
					</span>

				))}
					<span className="page-item" onClick={handleNextPage}>
						<span className="page-link">
							<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</span>
					</span>
				</div>
			</nav>
		</>
	)
}
