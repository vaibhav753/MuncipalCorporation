package com.app.utils;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.time.LocalDate;

import com.app.pojos.onlineServices.MarriageRegistration;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public interface MarriageCertificate {
	public static String FILE = "C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/MarriageCertificate.pdf";
	
	static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD);

	public static byte[] generateCertificate(MarriageRegistration marriage) {
		ByteArrayOutputStream baos= new ByteArrayOutputStream();
		try {
			Document document = new Document();
			PdfWriter.getInstance(document,baos);
			document.open();
		
			addTitlePage(document,marriage);
			// addContent(document);
			document.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return baos.toByteArray();
	}

	public static void addTitlePage(Document document,MarriageRegistration marriage) throws DocumentException, MalformedURLException, IOException {
		document.add(Image.getInstance("C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/MarriageCertificateTitle.PNG"));
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
		
		createTable(document,marriage);
		
		createTable2(document,marriage);
		
	//	createImageTable(document, marriage);
	}

	private static void createTable(Document document,MarriageRegistration marriage) throws DocumentException, MalformedURLException, IOException {
		PdfPTable table = new PdfPTable(2);
		
		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		
		table.addCell("Groom's Name: " + marriage.getHusbandName());
		table.addCell("Bride's Name: " + marriage.getWifeName());
		
		table.addCell("Groom's Religion: " +marriage.getHusbandReligion());
		table.addCell("Bride's Religion: " +marriage.getWifeReligion());
		
		table.addCell("Groom's Birthdate: " +marriage.getHusbandDob());
		table.addCell("Bride's Birthdate:" + marriage.getWifeDob());
		
		table.addCell("Groom's Address: " +marriage.getHusbandAddress());
		table.addCell("Bride's Address" + marriage.getWifeAddress());
		
		table.addCell("Date of Marriage: ");
		table.addCell(""+ marriage.getMarriageDate());
		
		Image husbandImage=Image.getInstance(marriage.getHusbandImage());
		//husbandImage.scaleAbsolute(100f, 100f);
		Image wifeImage=Image.getInstance(marriage.getWifeImage());
		//wifeImage.scaleToFit(50,50);
		//wifeImage.scaleAbsolute(100f, 100f);
		table.addCell(husbandImage);
		table.addCell(wifeImage);
		Paragraph para = new Paragraph();
		addEmptyLine(para, 2);
		document.add(table);
	}

//	private static void createImageTable(Document document,MarriageRegistration marriage) throws BadElementException, MalformedURLException, IOException {
//		PdfPTable table = new PdfPTable(2);
//		//table.getDefaultCell().setFixedHeight(50f);
//		Image husbandImage=Image.getInstance(marriage.getHusbandImage());
//		//husbandImage.scaleAbsolute(100f, 100f);
//		Image wifeImage=Image.getInstance(marriage.getWifeImage());
//		//wifeImage.scaleToFit(50,50);
//		//wifeImage.scaleAbsolute(100f, 100f);
//		table.addCell(husbandImage);
//		table.addCell(wifeImage);
//	}
	
	private static void createTable2(Document document,MarriageRegistration marriage) throws DocumentException, MalformedURLException, IOException {
		PdfPTable table = new PdfPTable(2);

		table.getDefaultCell().setBorder(0);
		table.getDefaultCell().setPadding(5);
		table.addCell("Registration No: " +marriage.getId()+ marriage.getHusbandName().substring(1)+marriage.getWifeName().substring(1));
		table.addCell("Registration Date: " + LocalDate.now());
		table.addCell("Date of Issue: " + LocalDate.now());
		table.addCell("Signature of issuing authority:");
		table.addCell("HOD Name");
		document.add(table);
		addImage(document);

	}

	private static void addEmptyLine(Paragraph paragraph, int number) {
		for (int i = 0; i < number; i++) {
			paragraph.add(new Paragraph(" "));
		}
	}

	private static void addImage(Document document) throws MalformedURLException, IOException, DocumentException {
		Image image = Image.getInstance("C:/Users/HP/Downloads/MunicipalCorporationFinal/MunicipalCorporationFinal/Images/stamp.PNG");
		image.scaleToFit(100, 100);
		image.setAbsolutePosition(230, 0);
		document.add(Image.getInstance(image));

	}
}
