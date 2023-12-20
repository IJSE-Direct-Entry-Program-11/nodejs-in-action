package lk.ijse.dep11.javawebserver;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/api/v1/customers")
public class CustomerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        var x=0;
        for (var i = 0; i < 1000000; i++) {
            x += i * 10;
            System.out.println(x);
        }
        resp.getWriter().println("<h1>" + x + "</h1>");
    }
}
