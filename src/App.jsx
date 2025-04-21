import { Routes, Route, Link } from "react-router-dom";
import Team from "./Team";
import Contact from "./Contact";

function App() {
  return (
    <>
      {/* Header */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none ms-5"
          >
            <i
              className="fa-duotone fa-solid fa-book fa-xl"
              style={{ color: "#2e7bff" }}
            ></i>
            <span className="ms-2 fs-4">BUKUKU</span>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link nav-blue">
              Home
            </Link>
          </li>
          <li>
            <a href="#best-seller" className="nav-link nav-blue">
              Book
            </a>
          </li>
          <li>
            <Link to="/team" className="nav-link nav-blue">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link nav-blue">
              Contact
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end me-md-5">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>

      {/* ROUTING SEMUA HALAMAN */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="container">
              {/* Hero */}
              <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                      Sebuah Seni Untuk Bersikap Bodo Amat productnation
                    </h1>
                    <p className="lead">
                      Kunci untuk kehidupan menjadi lebih baik bukan tentang
                      mempedulikan banyak hal namun tentang memperdulikan hal
                      yang sederhana saja, hanya peduli tentang apa yang benar
                      dan mendesak dan penting.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                      >
                        Buy Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg px-4"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <img
                      className="rounded-3"
                      src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
                      alt=""
                      width="720"
                      height="280"
                    />
                  </div>
                </div>
              </div>

              {/* Product List */}
              <section id="best-seller" className="py-5 text-center container">
                <div className="row py-lg-5">
                  <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Seller Book</h1>
                    <p className="lead text-body-secondary">
                      Rekomendasi buku best seller yang wajib dibaca tahun ini!
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary my-2 m-2">
                        Views
                      </a>
                      <a href="#" className="btn btn-secondary my-2">
                        Other Book
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <div className="album py-5 bg-body-tertiary">
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2024/09/2.-Mans-Search-For-Meaning-%E2%80%93-Viktor-E.-Frankl.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Man's Search For Meaning
                          </h5>{" "}
                          <p className="card-text">
                            Buku best seller yang berjudul Man's Search For
                            Meaning karya Viktor E. Frankl ini sangat menarik
                            untuk Anda baca.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2024/09/3.-1000-Mindset-Berpikir-Positif-%E2%80%93-Febri-Surya.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            1000 Mindset Berpikir Positif
                          </h5>{" "}
                          <p className="card-text">
                            Buku best seller karya Febri Surya yang berjudul
                            1000 Mindset Berpikir Positif ini mengajak para
                            pembaca untuk selalu berpikiran positif apapun yang
                            terjadi.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2022/07/2.-indistractable-Nir-Eyal-Julie-Li.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">indistractable</h5>{" "}
                          <p className="card-text">
                            Buku best seller ini termasuk dalam kategori buku
                            self improvement terbaik yang wajib untuk dibaca
                            semua kalangan.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2022/07/Atomic-Habits-Perubahan-Kecil-yang-Memberikan-Hasil-Luar-Biasa-James-Clear.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Atomic Habits: Perubahan Kecil yang Memberikan Hasil
                            Luar Biasa
                          </h5>{" "}
                          <p className="card-text">
                            Dalam buku ini, Clear mengungkapkan bagaimana
                            perubahan-perubahan yang sangat kecil dapat tumbuh
                            menjadi hasil-hasil yang mengubah hidup.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2022/07/3-Buku-Best-Seller-I-Want-To-Die-But-I-Want-To-Eat-Tteokpokki-Baek-Se-Hee-%E2%80%93-Haru-e1657610679180.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            I Want To Die But I Want To Eat Tteokpokki
                          </h5>{" "}
                          <p className="card-text">
                            I Want To Die But I Want To Eat Tteokpokki menjadi
                            salah satu buku best seller di Korea Selatan dan
                            banyak digemari juga oleh orang Indonesia.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2022/07/3-Buku-Best-Seller-Filosofi-Teras-Henry-Manampiring.jpg"
                          className="card-img-top"
                          alt="Judul Buku"
                          style={{ height: "225px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Filosofi Teras</h5>{" "}
                          <p className="card-text">
                            Buku best seller ini ditulis setebal 320 halaman dan
                            diterbitkan oleh Penerbit Buku Kompas.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card shadow-sm">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="225"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Thumbnail"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#55595c" />
                          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                            Thumbnail
                          </text>
                        </svg>
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="225"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Thumbnail"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#55595c" />
                          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                            Thumbnail
                          </text>
                        </svg>
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="225"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Thumbnail"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#55595c" />
                          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                            Thumbnail
                          </text>
                        </svg>
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Detail
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Buy
                              </button>
                            </div>
                            <small className="text-body-secondary">
                              9 mins
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="container">
                <footer className="py-3 my-4">
                  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                      <a href="#" className="nav-link px-2 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link px-2 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link px-2 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link px-2 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link px-2 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                  <p className="text-center text-body-secondary">
                    &copy; 2025 NF Academy
                  </p>
                </footer>
              </div>
            </div>
          }
        />

        {/* Team Page */}
        <Route path="/team" element={<Team />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
