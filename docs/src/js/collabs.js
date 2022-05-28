var nodes = new vis.DataSet([{"id": 957, "label": "Lil Wayne", "group": "hip-hop/rap", "color": "#001219"},
{"id": 459, "label": "Drake", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1186, "label": "Nicki Minaj", "group": "pop", "color": "#005f73"},
{"id": 315, "label": "Chris Brown", "group": "pop", "color": "#005f73"},
{"id": 831, "label": "Kanye West", "group": "hip-hop/rap", "color": "#001219"},
{"id": 570, "label": "Future", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1760, "label": "Young Thug", "group": "hip-hop/rap", "color": "#001219"},
{"id": 936, "label": "Lil Baby", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1332, "label": "Rick Ross", "group": "hip-hop/rap", "color": "#001219"},
{"id": 811, "label": "Justin Bieber", "group": "pop", "color": "#005f73"},
{"id": 1645, "label": "Travis Scott", "group": "hip-hop/rap", "color": "#001219"},
{"id": 495, "label": "Eminem", "group": "hip-hop/rap", "color": "#001219"},
{"id": 176, "label": "Big Sean", "group": "hip-hop/rap", "color": "#001219"},
{"id": 379, "label": "DJ Khaled", "group": "hip-hop/rap", "color": "#001219"},
{"id": 993, "label": "Ludacris", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1074, "label": "Meek Mill", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1502, "label": "T-Pain", "group": "hip-hop/rap", "color": "#001219"},
{"id": 8, "label": "2 Chainz", "group": "hip-hop/rap", "color": "#001219"},
{"id": 956, "label": "Lil Uzi Vert", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1505, "label": "T.I.", "group": "hip-hop/rap", "color": "#001219"},
{"id": 10, "label": "21 Savage", "group": "hip-hop/rap", "color": "#001219"},
{"id": 390, "label": "DaBaby", "group": "hip-hop/rap", "color": "#001219"},
{"id": 803, "label": "Juice WRLD", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1258, "label": "Pitbull", "group": "pop", "color": "#005f73"},
{"id": 51, "label": "Akon", "group": "pop", "color": "#005f73"},
{"id": 941, "label": "Lil Durk", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1335, "label": "Rihanna", "group": "pop", "color": "#005f73"},
{"id": 1595, "label": "The Weeknd", "group": "pop", "color": "#005f73"},
{"id": 1664, "label": "Ty Dolla $ign", "group": "hip-hop/rap", "color": "#001219"},
{"id": 265, "label": "Cardi B", "group": "pop", "color": "#005f73"},
{"id": 1665, "label": "Tyga", "group": "hip-hop/rap", "color": "#001219"},
{"id": 99, "label": "Ariana Grande", "group": "pop", "color": "#005f73"},
{"id": 1712, "label": "Wiz Khalifa", "group": "hip-hop/rap", "color": "#001219"},
{"id": 618, "label": "Gunna", "group": "hip-hop/rap", "color": "#001219"},
{"id": 858, "label": "Kendrick Lamar", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1445, "label": "Snoop Dogg", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1678, "label": "Usher", "group": "rnb", "color": "#e9d8a6", "font" : {"color": "black"}},
{"id": 1267, "label": "Polo G", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1272, "label": "Post Malone", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1288, "label": "Quavo", "group": "hip-hop/rap", "color": "#001219"},
{"id": 615, "label": "Gucci Mane", "group": "hip-hop/rap", "color": "#001219"},
{"id": 738, "label": "Jay-Z", "group": "hip-hop/rap", "color": "#001219"},
{"id": 163, "label": "Beyonce", "group": "pop", "color": "#005f73"},
{"id": 140, "label": "Bad Bunny", "group": "reggae", "color": "#ee9b00"},
{"id": 1095, "label": "Migos", "group": "hip-hop/rap", "color": "#001219"},
{"id": 1175, "label": "Nelly", "group": "hip-hop/rap", "color": "#001219"},
{"id": 25, "label": "A Boogie Wit da Hoodie", "group": "hip-hop/rap", "color": "#001219"},
{"id": 543, "label": "Flo Rida", "group": "pop", "color": "#005f73"},
{"id": 1271, "label": "Pop Smoke", "group": "hip-hop/rap", "color": "#001219"},
{"id": 410, "label": "David Guetta", "group": "electronic/dance", "color": "#bb3e03"}]
);

    // create an array with edges
    var edges = new vis.DataSet([{"from": 957, "to": 459},
    {"from": 957, "to": 1186},
    {"from": 957, "to": 315},
    {"from": 957, "to": 831},
    {"from": 957, "to": 570},
    {"from": 957, "to": 936},
    {"from": 957, "to": 1332},
    {"from": 957, "to": 811},
    {"from": 957, "to": 1645},
    {"from": 957, "to": 495},
    {"from": 957, "to": 176},
    {"from": 957, "to": 379},
    {"from": 957, "to": 1074},
    {"from": 957, "to": 1502},
    {"from": 957, "to": 8},
    {"from": 957, "to": 1505},
    {"from": 957, "to": 390},
    {"from": 957, "to": 1258},
    {"from": 957, "to": 51},
    {"from": 957, "to": 1664},
    {"from": 957, "to": 1665},
    {"from": 957, "to": 99},
    {"from": 957, "to": 1712},
    {"from": 957, "to": 858},
    {"from": 957, "to": 1445},
    {"from": 957, "to": 1678},
    {"from": 957, "to": 1267},
    {"from": 957, "to": 1288},
    {"from": 957, "to": 738},
    {"from": 957, "to": 163},
    {"from": 957, "to": 410},
    {"from": 459, "to": 1186},
    {"from": 459, "to": 315},
    {"from": 459, "to": 831},
    {"from": 459, "to": 570},
    {"from": 459, "to": 1760},
    {"from": 459, "to": 936},
    {"from": 459, "to": 1332},
    {"from": 459, "to": 811},
    {"from": 459, "to": 1645},
    {"from": 459, "to": 495},
    {"from": 459, "to": 176},
    {"from": 459, "to": 379},
    {"from": 459, "to": 1074},
    {"from": 459, "to": 8},
    {"from": 459, "to": 1505},
    {"from": 459, "to": 10},
    {"from": 459, "to": 390},
    {"from": 459, "to": 941},
    {"from": 459, "to": 1335},
    {"from": 459, "to": 1595},
    {"from": 459, "to": 1664},
    {"from": 459, "to": 1665},
    {"from": 459, "to": 618},
    {"from": 459, "to": 858},
    {"from": 459, "to": 1288},
    {"from": 459, "to": 615},
    {"from": 459, "to": 163},
    {"from": 459, "to": 140},
    {"from": 459, "to": 1095},
    {"from": 1186, "to": 315},
    {"from": 1186, "to": 831},
    {"from": 1186, "to": 570},
    {"from": 1186, "to": 1760},
    {"from": 1186, "to": 1332},
    {"from": 1186, "to": 811},
    {"from": 1186, "to": 495},
    {"from": 1186, "to": 176},
    {"from": 1186, "to": 379},
    {"from": 1186, "to": 993},
    {"from": 1186, "to": 1074},
    {"from": 1186, "to": 8},
    {"from": 1186, "to": 956},
    {"from": 1186, "to": 10},
    {"from": 1186, "to": 390},
    {"from": 1186, "to": 1335},
    {"from": 1186, "to": 1595},
    {"from": 1186, "to": 1664},
    {"from": 1186, "to": 265},
    {"from": 1186, "to": 1665},
    {"from": 1186, "to": 99},
    {"from": 1186, "to": 1678},
    {"from": 1186, "to": 1272},
    {"from": 1186, "to": 615},
    {"from": 1186, "to": 738},
    {"from": 1186, "to": 163},
    {"from": 1186, "to": 140},
    {"from": 1186, "to": 1095},
    {"from": 1186, "to": 543},
    {"from": 1186, "to": 410},
    {"from": 315, "to": 570},
    {"from": 315, "to": 1760},
    {"from": 315, "to": 1332},
    {"from": 315, "to": 811},
    {"from": 315, "to": 176},
    {"from": 315, "to": 379},
    {"from": 315, "to": 993},
    {"from": 315, "to": 1074},
    {"from": 315, "to": 1502},
    {"from": 315, "to": 8},
    {"from": 315, "to": 1505},
    {"from": 315, "to": 1258},
    {"from": 315, "to": 1335},
    {"from": 315, "to": 1664},
    {"from": 315, "to": 1665},
    {"from": 315, "to": 1712},
    {"from": 315, "to": 618},
    {"from": 315, "to": 1678},
    {"from": 315, "to": 615},
    {"from": 315, "to": 25},
    {"from": 315, "to": 1271},
    {"from": 315, "to": 410},
    {"from": 831, "to": 570},
    {"from": 831, "to": 1332},
    {"from": 831, "to": 1645},
    {"from": 831, "to": 495},
    {"from": 831, "to": 176},
    {"from": 831, "to": 379},
    {"from": 831, "to": 1502},
    {"from": 831, "to": 8},
    {"from": 831, "to": 956},
    {"from": 831, "to": 1505},
    {"from": 831, "to": 1335},
    {"from": 831, "to": 1664},
    {"from": 831, "to": 1288},
    {"from": 831, "to": 615},
    {"from": 831, "to": 738},
    {"from": 831, "to": 1271},
    {"from": 570, "to": 1760},
    {"from": 570, "to": 936},
    {"from": 570, "to": 1332},
    {"from": 570, "to": 1645},
    {"from": 570, "to": 379},
    {"from": 570, "to": 1074},
    {"from": 570, "to": 8},
    {"from": 570, "to": 956},
    {"from": 570, "to": 1505},
    {"from": 570, "to": 10},
    {"from": 570, "to": 390},
    {"from": 570, "to": 803},
    {"from": 570, "to": 1335},
    {"from": 570, "to": 1595},
    {"from": 570, "to": 1664},
    {"from": 570, "to": 99},
    {"from": 570, "to": 618},
    {"from": 570, "to": 858},
    {"from": 570, "to": 1272},
    {"from": 570, "to": 1288},
    {"from": 570, "to": 1271},
    {"from": 1760, "to": 936},
    {"from": 1760, "to": 1332},
    {"from": 1760, "to": 1645},
    {"from": 1760, "to": 1074},
    {"from": 1760, "to": 8},
    {"from": 1760, "to": 956},
    {"from": 1760, "to": 1505},
    {"from": 1760, "to": 10},
    {"from": 1760, "to": 390},
    {"from": 1760, "to": 803},
    {"from": 1760, "to": 941},
    {"from": 1760, "to": 1595},
    {"from": 1760, "to": 1665},
    {"from": 1760, "to": 99},
    {"from": 1760, "to": 618},
    {"from": 1760, "to": 1678},
    {"from": 1760, "to": 1272},
    {"from": 1760, "to": 1288},
    {"from": 1760, "to": 1095},
    {"from": 1760, "to": 25},
    {"from": 936, "to": 1645},
    {"from": 936, "to": 176},
    {"from": 936, "to": 379},
    {"from": 936, "to": 1074},
    {"from": 936, "to": 956},
    {"from": 936, "to": 1505},
    {"from": 936, "to": 390},
    {"from": 936, "to": 941},
    {"from": 936, "to": 618},
    {"from": 936, "to": 1267},
    {"from": 936, "to": 1272},
    {"from": 936, "to": 1288},
    {"from": 936, "to": 1271},
    {"from": 1332, "to": 1645},
    {"from": 1332, "to": 176},
    {"from": 1332, "to": 379},
    {"from": 1332, "to": 993},
    {"from": 1332, "to": 1074},
    {"from": 1332, "to": 1502},
    {"from": 1332, "to": 1505},
    {"from": 1332, "to": 1258},
    {"from": 1332, "to": 51},
    {"from": 1332, "to": 1665},
    {"from": 1332, "to": 1445},
    {"from": 1332, "to": 1678},
    {"from": 1332, "to": 738},
    {"from": 1332, "to": 1175},
    {"from": 1332, "to": 1271},
    {"from": 811, "to": 176},
    {"from": 811, "to": 379},
    {"from": 811, "to": 993},
    {"from": 811, "to": 10},
    {"from": 811, "to": 803},
    {"from": 811, "to": 1665},
    {"from": 811, "to": 99},
    {"from": 811, "to": 1678},
    {"from": 811, "to": 1272},
    {"from": 811, "to": 1288},
    {"from": 811, "to": 410},
    {"from": 1645, "to": 176},
    {"from": 1645, "to": 379},
    {"from": 1645, "to": 8},
    {"from": 1645, "to": 956},
    {"from": 1645, "to": 10},
    {"from": 1645, "to": 941},
    {"from": 1645, "to": 1595},
    {"from": 1645, "to": 1664},
    {"from": 1645, "to": 618},
    {"from": 1645, "to": 858},
    {"from": 1645, "to": 1272},
    {"from": 1645, "to": 1288},
    {"from": 1645, "to": 1095},
    {"from": 1645, "to": 1271},
    {"from": 495, "to": 176},
    {"from": 495, "to": 1505},
    {"from": 495, "to": 803},
    {"from": 495, "to": 51},
    {"from": 495, "to": 1335},
    {"from": 495, "to": 1267},
    {"from": 495, "to": 163},
    {"from": 176, "to": 379},
    {"from": 176, "to": 8},
    {"from": 176, "to": 10},
    {"from": 176, "to": 1664},
    {"from": 176, "to": 99},
    {"from": 176, "to": 1712},
    {"from": 176, "to": 858},
    {"from": 176, "to": 1272},
    {"from": 176, "to": 1288},
    {"from": 176, "to": 615},
    {"from": 176, "to": 738},
    {"from": 176, "to": 1095},
    {"from": 379, "to": 993},
    {"from": 379, "to": 1074},
    {"from": 379, "to": 1502},
    {"from": 379, "to": 1505},
    {"from": 379, "to": 10},
    {"from": 379, "to": 390},
    {"from": 379, "to": 1258},
    {"from": 379, "to": 51},
    {"from": 379, "to": 941},
    {"from": 379, "to": 1335},
    {"from": 379, "to": 265},
    {"from": 379, "to": 858},
    {"from": 379, "to": 1445},
    {"from": 379, "to": 1272},
    {"from": 379, "to": 1288},
    {"from": 379, "to": 163},
    {"from": 379, "to": 1095},
    {"from": 993, "to": 1502},
    {"from": 993, "to": 51},
    {"from": 993, "to": 1445},
    {"from": 993, "to": 1678},
    {"from": 993, "to": 410},
    {"from": 1074, "to": 1502},
    {"from": 1074, "to": 8},
    {"from": 1074, "to": 956},
    {"from": 1074, "to": 1505},
    {"from": 1074, "to": 10},
    {"from": 1074, "to": 941},
    {"from": 1074, "to": 1664},
    {"from": 1074, "to": 265},
    {"from": 1074, "to": 1272},
    {"from": 1074, "to": 1288},
    {"from": 1502, "to": 1258},
    {"from": 1502, "to": 51},
    {"from": 1502, "to": 1712},
    {"from": 1502, "to": 1445},
    {"from": 1502, "to": 1175},
    {"from": 1502, "to": 543},
    {"from": 8, "to": 1664},
    {"from": 8, "to": 99},
    {"from": 8, "to": 1712},
    {"from": 8, "to": 858},
    {"from": 8, "to": 1288},
    {"from": 8, "to": 615},
    {"from": 956, "to": 10},
    {"from": 956, "to": 803},
    {"from": 956, "to": 941},
    {"from": 956, "to": 1595},
    {"from": 956, "to": 618},
    {"from": 956, "to": 1095},
    {"from": 956, "to": 25},
    {"from": 1505, "to": 51},
    {"from": 1505, "to": 1335},
    {"from": 1505, "to": 1712},
    {"from": 1505, "to": 858},
    {"from": 1505, "to": 738},
    {"from": 10, "to": 941},
    {"from": 10, "to": 265},
    {"from": 10, "to": 1272},
    {"from": 10, "to": 1288},
    {"from": 10, "to": 140},
    {"from": 10, "to": 1095},
    {"from": 10, "to": 25},
    {"from": 10, "to": 1271},
    {"from": 390, "to": 1267},
    {"from": 390, "to": 1272},
    {"from": 390, "to": 1288},
    {"from": 390, "to": 615},
    {"from": 390, "to": 1095},
    {"from": 390, "to": 25},
    {"from": 390, "to": 1271},
    {"from": 803, "to": 1595},
    {"from": 803, "to": 1267},
    {"from": 803, "to": 1272},
    {"from": 803, "to": 25},
    {"from": 1258, "to": 51},
    {"from": 1258, "to": 1678},
    {"from": 1258, "to": 543},
    {"from": 51, "to": 1712},
    {"from": 51, "to": 1445},
    {"from": 51, "to": 1175},
    {"from": 51, "to": 543},
    {"from": 51, "to": 410},
    {"from": 941, "to": 618},
    {"from": 941, "to": 1267},
    {"from": 941, "to": 25},
    {"from": 1335, "to": 858},
    {"from": 1335, "to": 738},
    {"from": 1335, "to": 410},
    {"from": 1595, "to": 99},
    {"from": 1595, "to": 1712},
    {"from": 1595, "to": 858},
    {"from": 1595, "to": 1272},
    {"from": 1595, "to": 615},
    {"from": 1595, "to": 163},
    {"from": 1664, "to": 1665},
    {"from": 1664, "to": 99},
    {"from": 1664, "to": 1712},
    {"from": 1664, "to": 1445},
    {"from": 1664, "to": 1272},
    {"from": 1664, "to": 1095},
    {"from": 265, "to": 1272},
    {"from": 265, "to": 140},
    {"from": 265, "to": 1095},
    {"from": 1665, "to": 1712},
    {"from": 1665, "to": 1445},
    {"from": 1665, "to": 1288},
    {"from": 1665, "to": 25},
    {"from": 1665, "to": 543},
    {"from": 1665, "to": 1271},
    {"from": 1712, "to": 1445},
    {"from": 618, "to": 25},
    {"from": 858, "to": 1445},
    {"from": 858, "to": 163},
    {"from": 1678, "to": 615},
    {"from": 1678, "to": 738},
    {"from": 1678, "to": 163},
    {"from": 1678, "to": 410},
    {"from": 1267, "to": 1095},
    {"from": 1267, "to": 1271},
    {"from": 1272, "to": 1288},
    {"from": 1272, "to": 1095},
    {"from": 1288, "to": 615},
    {"from": 1288, "to": 1271},
    {"from": 615, "to": 1095},
    {"from": 25, "to": 1271},
    {"from": 543, "to": 410}]      
    );

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
   


    const options = {
        nodes: {
          font: {
            face:"canela web", 
            color:"white"}
        },
        physics: {
          enabled: true,
          barnesHut: {
            gravitationalConstant: -50000 
          },
          stabilization: {
            enabled: false 
          }
        }
      };
      
    var network = new vis.Network(container, data, options);
