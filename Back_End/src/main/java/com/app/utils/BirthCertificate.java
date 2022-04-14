package com.app.utils;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.time.LocalDate;

import com.app.pojos.onlineServices.BirthRegistration;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public interface BirthCertificate {
	
	public static String FILE = "C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/BirthCertificate.pdf";
	
	static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD);

	public static byte[] generateCertificate(BirthRegistration birth) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		try {
			Document document = new Document();
			
			PdfWriter.getInstance(document, baos);
			document.open();
		
			addTitlePage(document,birth);
			// addContent(document);
			document.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return baos.toByteArray();
		
	}

	public static void addTitlePage(Document document,BirthRegistration birth) throws DocumentException, MalformedURLException, IOException {
		document.add(Image.getInstance("C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/BirthCertificateTitle.PNG"));
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
		createTable(document,birth);
		createTable2(document,birth);
		addImage(document);

	}

	private static void createTable(Document document,BirthRegistration birth) throws DocumentException {
		PdfPTable table = new PdfPTable(2);
		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		table.addCell("Name: " + birth.getName());
		table.addCell("Gender: " + birth.getGender().toString());
		table.addCell("Date of Birth: " + birth.getDob());
		table.addCell("Place of Birth:" + "Mumbai");
		table.addCell("Day: " + birth.getDay());
		table.addCell("Time: " + birth.getBirthTime());
		table.addCell("Father's Name: " + birth.getFatherName());
		table.addCell("Mother's Name: " + birth.getMotherName());
		table.addCell("Address: ");
		table.addCell(" "+ birth.getAddress());
		Paragraph para = new Paragraph();
		addEmptyLine(para, 2);
		document.add(table);
	}

	private static void createTable2(Document document,BirthRegistration birth) throws DocumentException, MalformedURLException, IOException {
		PdfPTable table = new PdfPTable(2);

		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		table.addCell("Registration No: " +birth.getId()+ birth.getName().substring(1)+birth.getDob().toString().substring(1));
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
