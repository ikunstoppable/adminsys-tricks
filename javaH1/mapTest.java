package javaH1;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class mapTest {
    public static void main(String[] args) {
        Date date1 = new Date();
        System.out.println(date1);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        System.out.println(sdf.format(date1));

        Calendar cale = Calendar.getInstance();
        cale.setTime(date1);
        cale.add(Calendar.MONTH, 1);
        System.out.println(sdf.format(cale.getTime()));

        TimeZone timz = TimeZone.getDefault();
        System.out.println(timz.getDisplayName());

        LocalDateTime firsDateTime = LocalDateTime.of(2024, Month.JANUARY, 10, 22, 10, 33);
        LocalDateTime sencondDateTime = LocalDateTime.of(2024, 3, 10, 22, 10, 10);
        System.out.println(firsDateTime.isBefore(sencondDateTime));
        System.out.println(firsDateTime);

        LocalDateTime now1 = LocalDateTime.now();
        System.out.println(now1);
        LocalDateTime moreDay = now1.plusDays(10);
        LocalDateTime lessH = now1.minusHours(2);
        System.out.println(moreDay);
        System.out.println(lessH);
       
    }
}