using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Printing
{
    class Program
    {
        static void Main(string[] args)
        {
            double students = double.Parse(Console.ReadLine());
            double papersForEach = double.Parse(Console.ReadLine());
            double price = double.Parse(Console.ReadLine());

            Console.WriteLine(string.Format("{0:F2}", Calculate(students, papersForEach, price)));
        }

        private static double Calculate(double s, double p, double price)
        {
            return ((s * p) / 500) * price;
        }
    }
}
