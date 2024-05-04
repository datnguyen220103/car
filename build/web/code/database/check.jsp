<%-- 
    Document   : check
    Created on : May 30, 2023, 8:26:24 AM
    Author     : HIEU
--%>
<%@ page session="false" %>
<%@ page import="java.sql.*" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String DRIVER = "com.mysql.cj.jdbc.Driver";
            String URL =   "jdbc:mysql://localhost:3306/mysql";
            // Open a database connection
            Connection con = null;
            try{
            Class.forName(DRIVER);
            con = DriverManager.getConnection(URL,"root","123123123");           
            } catch (SQLException e) {
            e.printStackTrace();
            }
        %>
        <%
            String name = request.getParameter("name");
            String address  = request.getParameter("address");
            String phone = request.getParameter("phone");
            String email = request.getParameter("email");
            String note = request.getParameter("note");
            String BMW = request.getParameter("BMW");
            String Ferrari = request.getParameter("Ferrari");
            String Porsche = request.getParameter("Porsche");
            String BMW2 = request.getParameter("BMW2");
        try{
            String sql = "INSERT INTO qlhd1 (name, address, phone, email, note, BMW, Ferrari, Porsche, BMW2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, name);
            ps.setString(2, address);
            ps.setString(3, phone);
            ps.setString(4, email);
            ps.setString(5, note);
            ps.setString(6, BMW);
            ps.setString(7, Ferrari);
            ps.setString(8, Porsche);
            ps.setString(9, BMW2);
            int kt = ps.executeUpdate();
            if (kt > 0){
                response.sendRedirect("../checkout/checkout.html");
            }
            else {
                response.sendRedirect("../../checkout/checkout.html");
            }
        } catch (SQLException e){
            e.printStackTrace();
                    }
        %>
        <%
           try {
                if (con != null) {
                    con.close();
                }
            }catch (SQLException e)
            {
             e.printStackTrace();
            }
        %>
    </body>
</html>
