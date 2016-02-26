using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fire
{
    using System.Runtime.CompilerServices;

    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            Console.WriteLine(CreateFire(n));
        }

        private static string CreateFire(int n)
        {
            StringBuilder result = new StringBuilder();
            int mid = n / 2;
            for (int i = 1; i <  n / 2 + 1; i++)
            {
                for (int k = 0; k < n; k++)
                {
                    if (k == mid - i || k == mid - 1 + i)
                    {
                        result.Append("#");
                    }
                    else
                    {
                        result.Append(".");
                    }
                }
                result.AppendLine();
            }

            for (int i = 0; i < n / 4; i++)
            {
                for (int k = 0; k < n ; k++)
                {
                    if (k == n - i - 1 || k == i)
                    {
                        result.Append("#");
                    }
                    else
                    {
                        result.Append(".");
                    }
                }
                result.AppendLine();
            }

            for (int i = 0; i < n; i++)
            {
                result.Append("-");
            }

            result.AppendLine();

            for (int i = 0; i < n / 2; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (j < n / 2 && i <= j)
                    {
                        result.Append("\\");
                    }
                    else if((j + 1) > n / 2 && j < n - i)
                    {
                        result.Append("/");
                    }
                    else
                    {
                        result.Append(".");
                    }
                }
                result.AppendLine();
            }
            return result.ToString();
        }
    }
}
