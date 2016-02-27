using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cube
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            // TODO
            DrawCude(n);
        }

        private static void DrawCude(int side)
        {
            StringBuilder res = new StringBuilder();
            for (int i = 0; i < side; i++)
            {
                for (int j = 0; j < 2 * side - 1; j++)
                {
                    if ((i == 0 || i == side - 1 || i == 2 * side - 1)
                        && j > side/2+1)
                    {
                        res.Append(":");
                    }
                     else if (i > 0 && i < side && (j > side - i - 1 && j < side - 1))
                    {
                        res.Append("/");
                    }
                    else
                    {
                        res.Append(" ");
                    }
                }
                res.AppendLine();
            }

            Console.WriteLine(res.ToString());
        }
    }
}
