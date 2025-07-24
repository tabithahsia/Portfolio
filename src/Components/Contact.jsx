const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Contact me at{" "}
        <a href="mailto:tabithahsia@gmail.com">tabithahsia@gmail.com</a> or fill
        out the form below.
      </p>
      <form
        action="https://formspree.io/tabithahsia@gmail.com"
        method="POST"
        class="submissionfield"
      >
        <label htmlFor="Name">Name (required)</label>
        <input
          id="contact-name"
          type="text"
          name="Name"
          placeholder="Bob Ross"
          required
        />
        <label htmlFor="contact-email">Email (required)</label>
        <input
          id="contact-email"
          type="email"
          name="Email"
          placeholder="bobross@gmail.com "
          required
        />
        <label htmlFor="contact-phone">Phone Number (optional)</label>
        <input
          id="contact-phone"
          type="tel"
          name="Phone Number"
          placeholder="(123) 456-7890"
        />
        <label htmlFor="contact-message">Message (required)</label>
        <br></br>
        <textarea
          id="contact-message"
          name="Message"
          placeholder="Hello! Have a wonderful day!"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
