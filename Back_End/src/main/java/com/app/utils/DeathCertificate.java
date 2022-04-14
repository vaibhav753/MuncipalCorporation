package com.app.utils;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.time.LocalDate;

import com.app.pojos.onlineServices.DeathRegistration;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public interface DeathCertificate {
	public static String FILE = "C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/DeathCertificate.pdf";
	
	static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD);

	public static byte[] generateCertificate(DeathRegistration death) {
		ByteArrayOutputStream baos= new ByteArrayOutputStream();
		try {
			Document document = new Document();
			PdfWriter.getInstance(document, baos);
			document.open();
		
			addTitlePage(document,death);
			// addContent(document);
			document.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return baos.toByteArray();
	}

	public static void addTitlePage(Document document,DeathRegistration death) throws DocumentException, MalformedURLException, IOException {
		document.add(Image.getInstance("C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/DeathCertificateTitle.PNG"));
		Paragraph para = new Paragraph();

		addEmptyLine(para, 1);
		para.add(new Paragraph(
				"(Issued under section 12/17 of the Registration of Births and Deaths Act,1969 and Rule 8/13 of the Maharashtra Registration of Births and Deaths Rules,2000) ",
				smallBold));

		addEmptyLine(para, 2);

		para.add(new Paragraph(
				"	This is to certify that the following information has been taken from the original record of birth which is the register under Mumbai Municipal Corporation of State Maharashtra.",
				smallBold));
		addEmptyLine(para, 2);
		document.add(para);
		createTable(document,death);
		createTable2(document,death);
		addImage(document);

	}

	private static void createTable(Document document,DeathRegistration death) throws DocumentException {
		PdfPTable table = new PdfPTable(2);
		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		table.addCell("Deceased Name: " + death.getName());
		table.addCell("Date of Birth: " + death.getDob());
		table.addCell("Date of Death: " + death.getDod());
		table.addCell("Place of death:" + death.getPlace() );
		table.addCell("Day: " + death.getDay());
		table.addCell("Time: " + death.getTime());
		table.addCell("Father's/Hiusbands's Name: " + death.getFatherName());
		table.addCell("Permanent Address: "+death.getPermanentAddress());
		Paragraph para = new Paragraph();
		addEmptyLine(para, 2);
		document.add(table);
	}

	private static void createTable2(Document document,DeathRegistration death) throws DocumentException, MalformedURLException, IOException {
		PdfPTable table = new PdfPTable(2);

		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		table.addCell("Registration No: " +death.getId()+ death.getName().substring(1)+death.getDob().toString().substring(1));
		table.addCell("Registration Date: " + LocalDate.now());
		table.addCell("Date of Issue: " + LocalDate.now());
		table.addCell("Signature of issuing authority:");
		table.addCell("HOD Name");
		document.add(table);

	}

	private static void addEmptyLine(Paragraph paragraph, int number) {
		for (int i = 0; i < number; i++) {
			paragraph.add(new Paragraph(" "));
		}
	}

	private static void addImage(Document document) throws MalformedURLException, IOException, DocumentException {
		Image image = Image.getInstance("C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/stamp.PNG");
		image.scaleToFit(100, 100);
		image.setAbsolutePosition(220, 250);
		document.add(Image.getInstance(image));

	}
}
