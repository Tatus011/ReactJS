export default function Contact() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Hubungi Kami</h2>
        <form className="mx-auto" style={{ maxWidth: 600 }}>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control" placeholder="Nama lengkap" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda..." />
          </div>
          <button className="btn btn-primary">Kirim</button>
        </form>
      </div>
    );
  }
  