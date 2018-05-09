<?php include('header.php'); ?>

        <div class="container--large">
            <div class="breadcrumbs">
                <img class="full-width img-responsive" src="assets/images/breadcrumbs.jpg" alt="breadcrumbs">
            </div>
            <div class="category-grid">
                <div class="sidebar">
                    <img class="full-width img-responsive" src="assets/images/sidebar.jpg" alt="Sidebar">
                </div>

                <div class="right-column">
                    <div class="header-image">
                        <img class="full-width img-responsive" src="assets/images/category-header.jpg" alt="ring">
                    </div>
                    <div class="sorting">

                    </div>
                    <div class="product-grid">
                        <?php for ($i = 0; $i < 12; $i++): ?>
                            <?php include('partials/product.php'); ?>
                        <?php endfor; ?>
                    </div>
                </div>

            </div>

        </div>


<?php include('footer.php'); ?>
